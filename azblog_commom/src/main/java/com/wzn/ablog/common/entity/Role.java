package com.wzn.ablog.common.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import org.springframework.security.core.GrantedAuthority;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "sys_role")
@Data
public class Role implements GrantedAuthority {
    @Id
    private String role_id;
    private String role_name;
    private String comments;
    private String create_time;
    private String update_time;

    @JsonIgnore
    @Override
    public String getAuthority() {
        return role_name;
    }
}