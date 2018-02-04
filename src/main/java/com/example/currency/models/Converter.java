package com.example.currency.models;

import javax.validation.constraints.NotNull;

public class Converter {
	 @NotNull
	private String baseCurrency;
	 @NotNull
	 private double baseAmount;
	 @NotNull
	 private String targetCurrency;
	private double targetAmount;
	
	public Converter(String baseCurrency, double baseAmount, String targetCurrency) {
		super();
		this.baseCurrency = baseCurrency;
		this.baseAmount = baseAmount;
		this.targetCurrency = targetCurrency;
	}
	
	
	public Converter() {
		super();
	}


	public double getTargetAmount() {
		return targetAmount;
	}

	public void setTargetAmount(double targetAmount) {
		this.targetAmount = targetAmount;
	}
	
	public String getBaseCurrency() {
		return baseCurrency;
	}
	public void setBaseCurrency(String baseCurrency) {
		this.baseCurrency = baseCurrency;
	}
	public double getBaseAmount() {
		return baseAmount;
	}
	public void setBaseAmount(double baseAmount) {
		this.baseAmount = baseAmount;
	}
	public String getTargetCurrency() {
		return targetCurrency;
	}
	public void setTargetCurrency(String targetCurrency) {
		this.targetCurrency = targetCurrency;
	}

}
