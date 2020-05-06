package com.polsl.proj.recruitmentsystem.controllers;


import com.polsl.proj.recruitmentsystem.business.model.DTO.InputDTO.InputDecissionDTO;
import com.polsl.proj.recruitmentsystem.business.model.DTO.InputDTO.NewRecrutationDTO;
import com.polsl.proj.recruitmentsystem.business.model.DTO.InputDTO.SearchParametersDTO;
import com.polsl.proj.recruitmentsystem.business.model.DTO.InputDTO.SearchParametersFINAL;
import com.polsl.proj.recruitmentsystem.business.model.DTO.OutputDTO.JobOutDTO;
import com.polsl.proj.recruitmentsystem.business.model.DTO.POJOs.ContractPOJO;
import com.polsl.proj.recruitmentsystem.business.services.headRecruiter.HeadRecruiterFacade;
import com.polsl.proj.recruitmentsystem.business.utils.PDF.PDFUtility;
import com.polsl.proj.recruitmentsystem.business.utils.file.FileUtility;
import lombok.AllArgsConstructor;
import lombok.var;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.InputStreamResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.io.ByteArrayInputStream;
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
        return headRecruiterFacade.getAllJobApplications();
    }

    @PostMapping(value = "/generatePDF")
    @ResponseBody
    public String  generatePDF(@RequestBody ContractPOJO dto) {
        pdfUtility.setContractParams(dto);
        return "ok";
    }

    @GetMapping(value = "/recievePDF")
    @ResponseBody
    public ResponseEntity<InputStreamResource> recievePDF() {
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
    List<JobOutDTO> getParametrizedApplications(@RequestPart SearchParametersFINAL dto) { //TODO MultiPart czy nie multipart??
        return headRecruiterFacade.getFiltered(dto);
    }

    @GetMapping("/getFile")
    @ResponseBody
    public ResponseEntity<Resource> getFile() throws IOException {
        ByteArrayResource resource = fileUtility.read("plik.jpg");
        var headers = new HttpHeaders();
        headers.add("attachment", "inline; filename = umowa.jpg");
        return ResponseEntity
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

    @PostMapping("/startRecrutation")
    @ResponseBody
    public String startNewRecrutation(@RequestBody NewRecrutationDTO dto) {
        headRecruiterFacade.startNewRecrutation(dto);
        return "ok";
    }
}
