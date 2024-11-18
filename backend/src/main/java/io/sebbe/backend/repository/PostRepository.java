package io.sebbe.backend.repository;

import io.sebbe.backend.model.Post;
import org.springframework.data.repository.ListCrudRepository;

public interface PostRepository extends ListCrudRepository<Post, Long> {
}
