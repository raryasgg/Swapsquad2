package com.stackroute.recommendationservice.model.config;


import com.stackroute.recommendationservice.model.CustomMessage;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class Publisher {

	 @Autowired
	    private RabbitTemplate template;

	 
	    public String publishMessage(CustomMessage messages) {
	      //  user.setEmail(UUID.randomUUID().toString());
	      // user.setMessageDate(new Date());
	    //    CustomMessage messages = new CustomMessage(user, "PROCESS","MSG );
	        template.convertAndSend(MQConfig.EXCHANGE, MQConfig.ROUTING_KEY, messages);

	        return "Message Published";
	    }
	
}
