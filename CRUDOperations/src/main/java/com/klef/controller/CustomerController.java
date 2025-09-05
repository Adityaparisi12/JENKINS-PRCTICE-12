package com.klef.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.klef.model.Customer;
import com.klef.services.CustomerService;
@CrossOrigin("*")
@RestController
@RequestMapping("/api/customer")
public class CustomerController {
	
	@Autowired
	private CustomerService cs;
	
	@PostMapping("/add")
	public String addcustomer(@RequestBody Customer c) {
		return cs.addCustomer(c);
	}
	
	@GetMapping("/viewall")
	public List<Customer> getAllCustomer(){
		return cs.viewAllCustomers();
	}
	
	@GetMapping("/display")
	public ResponseEntity<?> displayCustomerByid(@RequestParam int cid){
		Customer c=cs.viewCustomer(cid);
		if(c!=null) {
			return ResponseEntity.ok(c);
		}else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Customer id not found");
		}
	}
	
	@DeleteMapping("/delete/{cid}")
	public String deletecustomerbyId(@PathVariable int cid)
	{
		return cs.deleteCustomer(cid);
	}
	
	@PutMapping("/update")
	public String updatecustomer(@RequestBody Customer c) {
		return cs.updateCustomer(c);
	}
}
