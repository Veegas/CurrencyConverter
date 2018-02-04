package com.example.currency.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.example.currency.exceptions.BadRequestException;
import com.example.currency.models.Converter;
import com.example.currency.services.ConverterService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class CurrencyController {
	@Autowired
	ConverterService converterService;
	

    @RequestMapping("/convert")
    public @ResponseBody Converter convert(Converter toBeConverted) {
    	if (toBeConverted.getBaseCurrency() == null || toBeConverted.getTargetCurrency() == null) {
    		throw new BadRequestException("Malformed Request Parameters");
    	}
    	
    	if (toBeConverted.getBaseAmount() <= 0) {
    		throw new BadRequestException("Cannot Convert Base Amount");
    	}
    	
    	double convertedAmount = converterService.convertCurrent(toBeConverted);
    	toBeConverted.setTargetAmount(convertedAmount);
    	
    	return toBeConverted;
    }
    
   
   
    @ResponseStatus(value=HttpStatus.BAD_REQUEST)  
    @ExceptionHandler(BadRequestException.class)
    public Exception badRequest(Exception e) {
    	return e;
    }
}