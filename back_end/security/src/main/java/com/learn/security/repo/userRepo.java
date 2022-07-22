package com.learn.security.repo;

import com.learn.security.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface userRepo extends JpaRepository<User,Long> {
    User findByUsername(String username);

}
