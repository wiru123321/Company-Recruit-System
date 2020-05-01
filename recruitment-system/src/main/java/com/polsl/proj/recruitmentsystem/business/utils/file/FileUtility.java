package com.polsl.proj.recruitmentsystem.business.utils.file;

import lombok.NoArgsConstructor;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@Component
@NoArgsConstructor
public class FileUtility {

    private final String serverUrl = "F:\\serwer\\files\\";

    public void save(MultipartFile file, int id) throws IOException {
        byte[] bytes = file.getBytes();
        Path path = Paths.get(serverUrl + file.getOriginalFilename());
        Files.write(path, bytes);
    }

    public ByteArrayResource read(String fileName) throws IOException {
        Path path = Paths.get(serverUrl + fileName);
        return new ByteArrayResource(Files.readAllBytes(path));
    }
}
