using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ToDoList.Services;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ToDoList.Models
{
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
            var toDo = _toDoService.SelectAll();
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
            _toDoService.CreateToDo(value);
        }

        // PUT api/<controller>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]ToDo value)
        {
            _toDoService.UpdateToDo(id, value);
        }

        // DELETE api/<controller>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _toDoService.DeleteToDo(id);
        }
    }
}
