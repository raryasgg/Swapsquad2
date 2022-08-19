package com.stackroute.recommendationservice.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.neo4j.core.schema.Node;

@Node
@Data
@NoArgsConstructor
@AllArgsConstructor
public class IncomingProductData {
    @Id
    private int productId;
    private String productOwnerEmail;
    private String productName;
    private String state;
    private String city;
    private String productCategory;
    private byte[] productImage;
}
