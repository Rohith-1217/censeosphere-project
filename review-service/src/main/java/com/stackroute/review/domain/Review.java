package com.stackroute.review.domain;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;



@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Document
public class Review {
    //primary key declaration
    @Id
    private String reviewerEmail;
    private String reviewTitle;
    private String reviewDescription;
    private byte[] image;
    private String productName;
    private Float price;
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
    private Date reviewedOn;

}
