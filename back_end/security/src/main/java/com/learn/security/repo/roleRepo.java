package com.learn.security.repo;

import com.learn.security.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface roleRepo extends JpaRepository<Role, Long> {
    Role findByName(String name);
}
