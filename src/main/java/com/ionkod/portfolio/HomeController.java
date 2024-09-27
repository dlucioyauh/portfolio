package com.ionkod.portfolio;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

    @GetMapping("/")
    public String home() {
        return "index"; // Vai renderizar o arquivo src/main/resources/templates/index.html
    }
}
