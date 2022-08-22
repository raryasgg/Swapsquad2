package com.stackroute.recommendationservice.controller;

import com.stackroute.recommendationservice.exception.ProductAlreadyExistException;
import com.stackroute.recommendationservice.model.IncomingProductData;
import com.stackroute.recommendationservice.repository.ProductDataRepository;
import com.stackroute.recommendationservice.service.RecommendationService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.reactivestreams.Publisher;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.neo4j.driver.internal.shaded.reactor.core.publisher.Mono.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@ExtendWith(MockitoExtension.class)
class RecommendationControllerTest {
    @Mock
    private RecommendationService recommendationService;
    @InjectMocks
    private RecommendationController recommendationController;
    @Autowired
    private MockMvc mockMvc;

    @BeforeEach
    public void setUp() {
        mockMvc = MockMvcBuilders.standaloneSetup(recommendationController).build();
    }

    RecommendationControllerTest() {
    }

//    @Test
//    public void addIncomingData() throws Exception {
//        IncomingProductData data = new IncomingProductData(1, "raju@gmail.com", "Bike", "UP", "Barabanki", "Automobiles");
//        when(recommendationService.createNode(any())).thenReturn(data);
//        mockMvc.perform(post("add").contentType(MediaType.APPLICATION_JSON)
//                        .content
//                                ("{\"productId\":\"1\",\"productOwnerEmail\":\"raju@gmail.com\",\"productName\":\"Bike\",\"state\":\"UP\",\"city\":\"Barabanki\",\"productCategory\":\"Automobiles\"}"))
//                .andExpect(status().isCreated()).andExpect(jsonPath("$.productId").value(1));
//    }


//    @Test
//     public void givenDuplicateProductWhenPostThenReturnErrorMessage() throws Exception {
//        when(recommendationService.createNode(any())).thenThrow(ProductAlreadyExistException.class);
//        mockMvc.perform(post("add").contentType(MediaType.APPLICATION_JSON)
//                        .content
//                                ("{\"productId\":\"1\",\"productOwnerEmail\":\"raju@gmail.com\",\"productName\":\"Bike\",\"state\":\"UP\",\"city\":\"Barabanki\",\"productCategory\":\"Automobiles\"}"))
//                .andExpect(status().isConflict()).andExpect(content().string("Product already Exist"));
//    }
}

