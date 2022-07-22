package com.learn.security.service;

import com.learn.security.model.Role;
import com.learn.security.model.User;

import java.util.List;

public interface userServiceInterface {
    User saveUser(User user);
    Role saveRole(Role role);
    void addRoleToUser(String username,String roleName);
    User getUser(String username);
    List<User> getUsers();

}
