package com.klef.services;

import java.util.List;

import com.klef.model.Customer;

public interface CustomerService {

	public String addCustomer(Customer c);

	public String deleteCustomer(int id);

	public String updateCustomer(Customer c);

	public List<Customer> viewAllCustomers();

	public Customer viewCustomer(int id);

}
