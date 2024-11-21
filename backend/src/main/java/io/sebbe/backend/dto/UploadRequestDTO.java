package io.sebbe.backend.dto;

import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public record UploadRequestDTO (String title, MultipartFile image, List<String> categories) {
}

