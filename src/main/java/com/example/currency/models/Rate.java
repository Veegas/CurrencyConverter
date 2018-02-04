package com.example.currency.models;

import java.util.Date;
import java.util.HashMap;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class Rate {

	
	private String base;
	private HashMap<String, Double> rates;
    
	@JsonFormat(pattern="yyyy-MM-dd")
	private Date date;
	
	public HashMap<String, Double> getRates() {
		return rates;
	}
	public Rate(String base, HashMap<String, Double> rates, Date date) {
		super();
		this.base = base;
		this.rates = rates;
		this.date = date;
	}
	public Rate(String base, HashMap<String, Double> rates) {
		super();
		this.base = base;
		this.rates = rates;
		this.date = new Date();
	}
	public Rate() {
		super();
		// TODO Auto-generated constructor stub
	}
	public void setRates(HashMap<String, Double> rates) {
		this.rates = rates;
	}
	public String getBase() {
		return base;
	}
	public void setBase(String base) {
		this.base = base;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
}
