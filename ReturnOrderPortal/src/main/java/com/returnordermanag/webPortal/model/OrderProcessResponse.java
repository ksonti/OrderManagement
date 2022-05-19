package com.returnordermanag.webPortal.model;

public class OrderProcessResponse {

	private int requestId;
	private int userID;
	private double processingCharge;
	private double packagingAndDeliveryCharge;
	private String dateOfDelivery;
	private double totalCharges;
	public int getRequestId() {
		return requestId;
	}
	public void setRequestId(int requestId) {
		this.requestId = requestId;
	}
	public int getUserID() {
		return userID;
	}
	public void setUserID(int userID) {
		this.userID = userID;
	}
	public double getProcessingCharge() {
		return processingCharge;
	}
	public void setProcessingCharge(double processingCharge) {
		this.processingCharge = processingCharge;
	}
	public double getPackagingAndDeliveryCharge() {
		return packagingAndDeliveryCharge;
	}
	public void setPackagingAndDeliveryCharge(double packagingAndDeliveryCharge) {
		this.packagingAndDeliveryCharge = packagingAndDeliveryCharge;
	}
	public String getDateOfDelivery() {
		return dateOfDelivery;
	}
	public void setDateOfDelivery(String dateOfDelivery) {
		this.dateOfDelivery = dateOfDelivery;
	}
	public double getTotalCharges() {
		return totalCharges;
	}
	public void setTotalCharges(double totalCharges) {
		this.totalCharges = totalCharges;
	}
}
