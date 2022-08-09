package com.stackroute.recommendationservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.ComponentScan;


@Slf4j
@SpringBootApplication
@ComponentScan("com.stackroute.recommedationservice")

public class RecommendationServiceApplication {
	public static void main(String[] args) {
        ConfigurableApplicationContext ctx = SpringApplication.run(RecommendationServiceApplication.class, args);
       log.debug("Started recommendation service at port {}", ctx.getEnvironment().getProperty("server.port"));


        System.out.println("Recommendation is running..");

	}
}
