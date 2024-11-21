package io.sebbe.backend.model;

import java.text.DateFormatSymbols;

public record CategoriesRequestDTO (
        boolean Vehicles,
        boolean Beauty,
        boolean Technology,
        boolean Cinema,
        boolean News,
        boolean Games,
        boolean Developer,
        boolean School,
        boolean Electronics,
        boolean Memes,
        boolean Steam,
        boolean Sports,
        boolean Gardening,
        boolean Climate
)
{}
