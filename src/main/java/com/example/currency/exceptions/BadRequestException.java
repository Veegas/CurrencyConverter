package com.example.currency.exceptions;

public class BadRequestException extends RuntimeException{


	/**
	 * 
	 */
	private static final long serialVersionUID = 8384206302645664098L;

	

	public BadRequestException(String string) {
		super(string);
	}



	public BadRequestException() {
		super();
		// TODO Auto-generated constructor stub
	}



	public BadRequestException(String message, Throwable cause, boolean enableSuppression,
			boolean writableStackTrace) {
		super(message, cause, enableSuppression, writableStackTrace);
		// TODO Auto-generated constructor stub
	}



	public BadRequestException(String message, Throwable cause) {
		super(message, cause);
		// TODO Auto-generated constructor stub
	}



	public BadRequestException(Throwable cause) {
		super(cause);
		// TODO Auto-generated constructor stub
	}
}