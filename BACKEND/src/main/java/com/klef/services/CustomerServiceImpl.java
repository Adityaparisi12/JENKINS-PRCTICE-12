package com.klef.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.klef.model.Customer;
import com.klef.repository.CustomerRepository;

@Service
public class CustomerServiceImpl implements CustomerService {

	@Autowired
	private CustomerRepository cr;

	@Override
	public String addCustomer(Customer c) {
		cr.save(c);
		return "customer added successfully";
	}

	@Override
	public String deleteCustomer(int id) {
		Optional<Customer> obj = cr.findById(id);
		if (obj.isPresent()) {
			Customer c = obj.get();
			cr.delete(c);
			return "Customer Deleted successfully";
		} else {
			return "Customer Not Found";
		}
	}

	@Override
	public String updateCustomer(Customer c) {
		Optional<Customer> obj = cr.findById(c.getId());
		if (obj.isPresent()) {
			Customer cust = obj.get();
			c.setName(c.getName());
			c.setGender(c.getGender());
			c.setAge(c.getAge());
			c.setContact(c.getContact());
			
			return "Updated successfully";

		} else {
			return "Customer Not Found";
		}
	}

	@Override
	public List<Customer> viewAllCustomers() {
		return cr.findAll();
	}

	@Override
	public Customer viewCustomer(int id) {
		return cr.findById(id).get();
	}

}
