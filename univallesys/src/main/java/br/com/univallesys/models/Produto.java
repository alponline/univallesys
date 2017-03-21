package br.com.univallesys.models;


import com.ancientprogramming.fixedformat4j.annotation.Align;
import com.ancientprogramming.fixedformat4j.annotation.Field;
import com.ancientprogramming.fixedformat4j.annotation.FixedFormatPattern;
import com.ancientprogramming.fixedformat4j.annotation.Record;

import javax.persistence.Entity;
import java.util.Date;

@Record
@Entity
public class Produto {

    private String name;
    private String code;
    private double price;
    private Date purchaseDate;

    @Field(offset = 1, length = 20)
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Field(offset = 1, length = 10)
    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    @Field(offset = 11, length = 8, align = Align.RIGHT, paddingChar = '0')
    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    @Field(offset = 16, length = 10)
    @FixedFormatPattern("yyyyMMdd")
    public Date getPurchaseDate() {
        return purchaseDate;
    }

    public void setPurchaseDate(Date purchaseDate) {
        this.purchaseDate = purchaseDate;
    }

    @Override
    public String toString() {
        return "Produto{" +
                "name='" + name + '\'' +
                ", code='" + code + '\'' +
                ", price=" + price +
                ", purchaseDate=" + purchaseDate +
                '}';
    }
}
