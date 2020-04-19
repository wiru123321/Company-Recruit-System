package com.polsl.proj.recruitmentsystem.controllers;


import com.itextpdf.text.Document;
import com.polsl.proj.recruitmentsystem.business.services.HeadRecruiterFacade;
import com.polsl.proj.recruitmentsystem.business.model.DTO.InputDTO.InputDecissionDTO;
import com.polsl.proj.recruitmentsystem.business.model.DTO.InputDTO.SearchParametersDTO;
import com.polsl.proj.recruitmentsystem.business.model.DTO.OutputDTO.JobOutDTO;

import com.polsl.proj.recruitmentsystem.business.utils.PDFUtility;
import lombok.AllArgsConstructor;
import lombok.var;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.io.*;
import java.net.URLConnection;
import java.util.List;

@Controller
@RequestMapping("/head")
@CrossOrigin(origins = "http://localhost:4200")
@AllArgsConstructor
public class HeadRecruiterController {

    private final HeadRecruiterFacade headRecruiterFacade;
    private  final PDFUtility pdfUtility;

    @GetMapping("/main")
    String headPage(){
        return "head/main";
    }

   @GetMapping("/allApplications")
    @ResponseBody
    List<JobOutDTO> getAllApplications(){
       pdfUtility.createSimplePDFFile();
        return headRecruiterFacade.getAll();
    }

    @GetMapping(value="/generatePDF")
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
    List<JobOutDTO> getParametrizedApplications(@RequestPart SearchParametersDTO dto){      //TODO Zmienić na RequestBody
        return headRecruiterFacade.getFiltered(dto);
    }

    @PostMapping("/addDecission")
    public String addDecission(@RequestBody InputDecissionDTO dto){
        headRecruiterFacade.addDecission(dto);
        return "ok";
    }
}
