package io.sebbe.backend.config;
import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class CloudinaryConfig {

  @Bean
  public Cloudinary cloudinary() {
    return new Cloudinary(ObjectUtils.asMap(
            "cloud_name", "dh7g57rkb", // Use the Cloud Name from your dashboard
            "api_key", "97781363931681", // Use the API Key
            "api_secret", "tuEGTixhBlMk6UUXtsZiY9ExHmI" // Replace with the actual API Secret
    ));
  }
}
