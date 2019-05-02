using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ToDoList.Services;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ToDoList.Models
{
    [Authorize]
    [Route("api/[controller]")]
    public class ToDoController : Controller
    {
        private IToDoService _toDoService;

        public ToDoController(IToDoService toDoService)
        {
            _toDoService = toDoService;
        }
        // GET: api/<controller>
        [HttpGet]
        public IActionResult Get()
        {
            var userName = this.User.Identity.Name;
            var toDo = _toDoService.SelectAll(userName);
            return Ok(toDo);
        }

        // GET: api/<controller>
        [HttpGet("tags")]
        public IActionResult GetToDoWithTags([FromQuery]string tags)
        {
            var tagList = tags.Split(',');
            var toDo = _toDoService.SelectAllWithTags(tagList);
            return Ok(toDo);
        }

        //GET api/<controller>/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var toDo = _toDoService.SelectToDo(id);
            if (toDo != null)
            {
                return Ok(toDo);
            }
            return NotFound();
        }

        // POST api/<controller>
        [HttpPost]
        public void Post([FromBody]ToDo value)
        {
            var userName = this.User.Identity.Name;
            _toDoService.CreateToDo(userName, value);
        }

        // PUT api/<controller>/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody]ToDo value)
        {
            try
            {
                var userName = this.User.Identity.Name;
                _toDoService.UpdateToDo(userName, id, value);
                return Ok();
            }
            catch (Exception)
            {
                return Unauthorized();
            }
        }

        // DELETE api/<controller>/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            try
            {
                var userName = this.User.Identity.Name;
                _toDoService.DeleteToDo(userName, id);
                return Ok();
            } catch(Exception)
            {
                return Unauthorized();
            }
        }
    }
}
