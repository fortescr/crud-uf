package com.crud.rest;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;

import com.crud.dao.GenericDAO;
import com.crud.entity.UfEntity;
import com.crud.http.Uf;

@Path("/uf")
public class TaskService {

	private GenericDAO<UfEntity> dao = new GenericDAO<UfEntity>();

	@GET
	@Produces("application/json; charset=UTF-8")
	@Path("/getUf/{id}")
	public Uf getUf(@PathParam("id") Integer id){

		UfEntity entity = dao.getEntity("UfEntity", id);

		if(entity != null){			

			return new Uf(entity.getId(), entity.getNome(), entity.getSigla());
		}

		return null;
	}

	@GET
	@Produces("application/json; charset=UTF-8")
	@Path("/ufs")
	public List<Uf> ufs(){

		List<Uf> tasks =  new ArrayList<Uf>();

		List<UfEntity> listaEntity = dao.getAll("UfEntity", "");

		for (UfEntity entity : listaEntity) {
			tasks.add(new Uf(entity.getId(), entity.getNome(), entity.getSigla(), entity.getDataInclusao(), entity.getDataAlteracao()));
		}

		return tasks;
	}
	
	@PUT
	@Produces("application/json; charset=UTF-8")
	@Consumes("application/json; charset=UTF-8")	
	@Path("/edit")
	public Response alterar(Uf uf){

		UfEntity entity = new UfEntity();
		try {			
			entity = newEntity(uf, entity);
			entity.setDataAlteracao(new java.sql.Date(new Date().getTime()));
			
			dao.edit(entity);

			return Response.status(Response.Status.OK).build();

		} catch (Exception e) {

			return Response.status(Response.Status.INTERNAL_SERVER_ERROR).build();

		}

	}	

	@POST	
	@Consumes("application/json; charset=UTF-8")
	@Produces("application/json; charset=UTF-8")
	@Path("/save")
	public Response save(Uf uf){

		UfEntity entity = new UfEntity();
		try {			
			entity = newEntity(uf, entity);	
			entity.setDataInclusao(new java.sql.Date(new Date().getTime()));
			entity.setDataAlteracao(new java.sql.Date(new Date().getTime()));
			dao.save(entity);


			return Response.status(Response.Status.OK).build();

		} catch (Exception e) {

			return Response.status(Response.Status.INTERNAL_SERVER_ERROR).build();
		}

	}
	
	@PUT
	@Produces("application/json; charset=UTF-8")
	@Consumes("application/json; charset=UTF-8")	
	@Path("/remove")
	public Response remove(Uf uf){
		try {			
			dao.remove("UfEntity", uf.getId());
			
			return Response.status(Response.Status.OK).build();

		} catch (Exception e) {
			return Response.status(Response.Status.INTERNAL_SERVER_ERROR).build();
		}
	}
	
	private UfEntity newEntity(Uf task,UfEntity entity){		
		entity.setId(task.getId());
		entity.setNome(task.getNome());
		entity.setSigla(task.getSigla());
		return entity;
	}
}
