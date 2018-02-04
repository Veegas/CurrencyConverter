package com.example.currency.services;

import java.util.Date;
import java.util.HashMap;

import org.joda.time.DateTime;
import org.joda.time.Days;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.example.currency.models.Rate;

@Service
public class RatesService {
	private static final String RATES_API_URL = "https://api.fixer.io/latest?base={baseCurrency}";

	HashMap<String, Rate> currentRates = new HashMap<String, Rate>();

	public Rate getTodayRates(String baseCurrency) {
		// Check if cached
		if (currentRates.containsKey(baseCurrency)) {
			Rate rate = currentRates.get(baseCurrency);

			Date rateDate = rate.getDate();
			Date currentDate = new Date();

			int daysBetween = Days.daysBetween(new DateTime(rateDate), new DateTime(currentDate)).getDays();

			if (daysBetween == 0) {
				return rate;
			}
		}
		
		return updateTodayRates(baseCurrency);
	}

	public Rate updateTodayRates(String baseCurrency) {
		HashMap<String, String> restVars = new HashMap<String, String>();
		restVars.put("baseCurrency", baseCurrency);

		RestTemplate template = new RestTemplate();
		Rate rate = template.getForObject(RATES_API_URL, Rate.class, restVars);

		currentRates.put(baseCurrency, rate);
		return rate;
	}
	
	

	public HashMap<String, Rate> getCurrentRates() {
		return currentRates;
	}

	public void setCurrentRates(HashMap<String, Rate> currentRates) {
		this.currentRates = currentRates;
	}
}
