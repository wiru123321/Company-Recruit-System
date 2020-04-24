package com.polsl.proj.recruitmentsystem.controllers;


import com.polsl.proj.recruitmentsystem.business.model.DTO.InputDTO.InputDecissionDTO;
import com.polsl.proj.recruitmentsystem.business.model.DTO.InputDTO.SearchParametersDTO;
import com.polsl.proj.recruitmentsystem.business.model.DTO.OutputDTO.JobOutDTO;
import com.polsl.proj.recruitmentsystem.business.model.recruitAttributes.File;
import com.polsl.proj.recruitmentsystem.business.services.HeadRecruiterFacade;
import com.polsl.proj.recruitmentsystem.business.utils.PDF.PDFUtility;
import com.polsl.proj.recruitmentsystem.business.utils.file.FileUtility;
import lombok.AllArgsConstructor;
import lombok.var;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.InputStreamResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.io.ByteArrayInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.List;

@Controller
@RequestMapping("/head")
@CrossOrigin(origins = "http://localhost:4200")
@AllArgsConstructor
public class HeadRecruiterController {

    private final HeadRecruiterFacade headRecruiterFacade;
    private final PDFUtility pdfUtility;
    private final FileUtility fileUtility;

    @GetMapping("/main")
    String headPage() {
        return "head/main";
    }

    @GetMapping("/allApplications")
    @ResponseBody
    List<JobOutDTO> getAllApplications() {
        pdfUtility.createSimplePDFFile();
        return headRecruiterFacade.getAll();
    }

    @GetMapping(value = "/generatePDF")
    @ResponseBody
    public ResponseEntity<InputStreamResource> generatePDF() {
        ByteArrayInputStream bis = pdfUtility.createSimplePDFFile();
        var headers = new HttpHeaders();
        headers.add("attachment", "inline; filename=umowa.pdf");
        return ResponseEntity
                .ok()
                .headers(headers)
                .contentType(MediaType.APPLICATION_PDF)
                .body(new InputStreamResource(bis));
    }

    @PostMapping("/parametrizedApplications")
    @ResponseBody
    List<JobOutDTO> getParametrizedApplications(@RequestPart SearchParametersDTO dto) {      //TODO Zmienić na RequestBody
        return headRecruiterFacade.getFiltered(dto);
    }

    @GetMapping("/getFile")
    @ResponseBody
    public ResponseEntity<Resource> getFile() throws IOException {

        ByteArrayResource resource = fileUtility.read("plik.jpg");
        var headers = new HttpHeaders();
        headers.add("attachment", "filename=umowa.jpg");
        return  ResponseEntity
                .ok()
                .headers(headers)
                .contentType(MediaType.parseMediaType("application/octet-stream"))
                .body(resource);
    }

    @PostMapping("/addDecission")
    @ResponseBody
    public String addDecission(@RequestBody InputDecissionDTO dto) {
        headRecruiterFacade.addDecission(dto);
        return "ok";
    }
}
