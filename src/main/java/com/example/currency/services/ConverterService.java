package com.example.currency.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.example.currency.exceptions.BadRequestException;
import com.example.currency.models.Converter;
import com.example.currency.models.Rate;

@Component
public class ConverterService {

	@Autowired
	RatesService ratesService;
	
	public double convertCurrent(Converter toBeConverted) {
		
		if (toBeConverted.getBaseCurrency().equals(toBeConverted.getTargetCurrency())) {
			return toBeConverted.getBaseAmount();
		}
		
		Rate todayRate = ratesService.getTodayRates(toBeConverted.getBaseCurrency());
		Double targetRate = todayRate.getRates().get(toBeConverted.getTargetCurrency());
		
		if (targetRate == null) {
			System.err.println("Cannot find targeted currency");
			throw new BadRequestException("Cannot find targeted currency");
		}
		
		return toBeConverted.getBaseAmount() * targetRate;
	}
}
