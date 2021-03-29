package ca.sheridancollege.vellone.assignment3.data;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "contact")
@Data
public class Contact implements Serializable {

    @Column(name = "id")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "full_name")
    private String fullName = "";

    @Column(name = "contact_type")
    private String contactType = "";

    @Column(name = "email")
    private String email = "";

    @Column(name = "phone_number")
    private String phoneNumber = "";

    @Column(name = "address")
    private String address = "";

    public Contact(){
    };
}