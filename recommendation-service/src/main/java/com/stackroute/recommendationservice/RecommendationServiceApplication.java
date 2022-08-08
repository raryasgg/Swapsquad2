package com.stackroute.recommendationservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;
import lombok.extern.slf4j.Slf4j;


@Slf4j
@SpringBootApplication

public class RecommendationServiceApplication {
	public static void main(String[] args) {
        ConfigurableApplicationContext ctx = SpringApplication.run(RecommendationServiceApplication.class, args);
       log.debug("Started recommendation service at port {}", ctx.getEnvironment().getProperty("server.port"));


        System.out.println("Recommendation is running..");

	}
}
