package com.crud.http;

import java.util.Date;

import javax.persistence.Column;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class Uf {

	private Integer id;

	private String nome;

	private String sigla;
	
	private Date dataInclusao;
	
	private Date dataAlteracao;

	public Uf() {
	}

	public Uf(Integer id, String nome, String sigla) {
		super();
		this.id = id;
		this.nome = nome;
		this.sigla = sigla;
	}

	public Uf(Integer id, String nome, String sigla, Date dataInclusao, Date dataAlteracao) {
		super();
		this.id = id;
		this.nome = nome;
		this.sigla = sigla;
		this.dataInclusao = dataInclusao;
		this.dataAlteracao = dataAlteracao;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getSigla() {
		return sigla;
	}

	public void setSigla(String sigla) {
		this.sigla = sigla;
	}

	public Date getDataInclusao() {
		return dataInclusao;
	}

	public void setDataInclusao(Date dataInclusao) {
		this.dataInclusao = dataInclusao;
	}

	public Date getDataAlteracao() {
		return dataAlteracao;
	}

	public void setDataAlteracao(Date dataAlteracao) {
		this.dataAlteracao = dataAlteracao;
	}

}
