package io.sebbe.backend.dto;

import org.springframework.web.multipart.MultipartFile;

public record UploadRequestDTO (String title, MultipartFile image) {
}

