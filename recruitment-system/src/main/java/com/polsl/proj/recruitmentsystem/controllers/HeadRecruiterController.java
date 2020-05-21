package com.polsl.proj.recruitmentsystem.controllers;


import com.polsl.proj.recruitmentsystem.business.model.DTO.InputDTO.InputDecissionDTO;
import com.polsl.proj.recruitmentsystem.business.model.DTO.InputDTO.NewRecrutationDTO;
import com.polsl.proj.recruitmentsystem.business.model.DTO.InputDTO.SearchParametersFINAL;
import com.polsl.proj.recruitmentsystem.business.model.DTO.OutputDTO.JobOutDTO;
import com.polsl.proj.recruitmentsystem.business.model.DTO.POJOs.ContractPOJO;
import com.polsl.proj.recruitmentsystem.business.model.recrutationProcesses.RecrutationProcess;
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
import java.security.Principal;
import java.util.List;

@Controller
@RequestMapping("/head")
@CrossOrigin
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
    List<JobOutDTO> getAllApplications(Principal principal) {
        return headRecruiterFacade.getAllJobApplicationsForHeadRecruiter(principal.getName());
    }

    @PostMapping(value = "/generatePDF")
    @ResponseBody
    public String  generatePDF(@RequestBody ContractPOJO dto,Principal principal) {
        pdfUtility.setContractParams(dto,principal.getName());
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
    List<JobOutDTO> getParametrizedApplications(@RequestBody SearchParametersFINAL dto,Principal principal) {
        return headRecruiterFacade.getFiltered(dto,principal.getName());
    }

    @GetMapping("/getFile/{recruitID}")
    @ResponseBody
    public ResponseEntity<Resource> getFile(@PathVariable("recruitID")String recruitID) throws IOException {
        ByteArrayResource resource = fileUtility.read(recruitID);
        var headers = new HttpHeaders();
        headers.add("attachment", "inline; filename = "+recruitID+".pdf");
        return ResponseEntity
                .ok()
                .headers(headers)
                .contentType(MediaType.APPLICATION_PDF)
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
    public String startNewRecrutation(@RequestBody NewRecrutationDTO dto,Principal principal) {
        headRecruiterFacade.startNewRecrutation(dto,principal.getName());
        return "Rekrutacja rozpoczęta pomyślnie";
    }

    @GetMapping("/getAllRecrutationProcesses")
    @ResponseBody
    public List<RecrutationProcess> getAllRecrutationProcesses(Principal principal) {
        return headRecruiterFacade.getAllRecrutationProcesses(principal.getName());
    }
}
