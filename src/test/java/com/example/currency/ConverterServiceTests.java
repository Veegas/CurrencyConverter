package com.example.currency;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.offset;
import static org.mockito.Matchers.anyString;
import static org.mockito.Mockito.when;

import java.util.HashMap;

import org.assertj.core.api.Assertions;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.example.currency.exceptions.BadRequestException;
import com.example.currency.models.Converter;
import com.example.currency.models.Rate;
import com.example.currency.services.ConverterService;
import com.example.currency.services.RatesService;

@RunWith(SpringRunner.class)
@SpringBootTest
public class ConverterServiceTests {

	@InjectMocks
	ConverterService converterService;
	
	@Mock
	RatesService ratesService;
	
	
	@Test
	public void TestCorrectConverterService() {
		Converter toBeConverted = new Converter("USD", 100, "EUR");
		HashMap<String, Double> currentRatesValues = new HashMap<String, Double>();
		currentRatesValues.put("EUR", 2.0);
		Rate rates = new Rate("USD", currentRatesValues);
		
		when(ratesService.getTodayRates(anyString())).thenReturn(rates);	
		
		double amount = converterService.convertCurrent(toBeConverted);
		assertThat(amount).isEqualTo(200.0, Assertions.withPrecision(1.000));
	}
	
	@Test
	public void TestBigCorrectConverterService() {
		Converter toBeConverted = new Converter("USD", 1000000000, "EUR");
		HashMap<String, Double> currentRatesValues = new HashMap<String, Double>();
		currentRatesValues.put("EUR", 10000000000000000000.0);
		Rate rates = new Rate("USD", currentRatesValues);
		
		when(ratesService.getTodayRates(anyString())).thenReturn(rates);	
		
		double amount = converterService.convertCurrent(toBeConverted);
		assertThat(amount).isEqualTo(1000000000 * 10000000000000000000.0, Assertions.withPrecision(1.000));
	}
	
	
	@Test(expected= BadRequestException.class)
	public void TestInvalidTargetCurrency() {
		Converter toBeConverted = new Converter("USD", 100, "EUR");
		HashMap<String, Double> currentRatesValues = new HashMap<String, Double>();
		currentRatesValues.put("EGP", 2.0);
		Rate rates = new Rate("USD", currentRatesValues);
		
		when(ratesService.getTodayRates(anyString())).thenReturn(rates);	
		
		double amount = converterService.convertCurrent(toBeConverted);
	}
	
	
	
    @Before
    public void setUp() throws Exception {

         MockitoAnnotations.initMocks(this);
    }

}
