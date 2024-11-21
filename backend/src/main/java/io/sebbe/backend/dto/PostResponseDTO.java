package io.sebbe.backend.dto;

import java.util.List;

public record PostResponseDTO(long id, String title, String url, List<String> categories) {
}
