using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ToDoList.Models;
using ToDoList.Services;

namespace ToDoList.Controllers
{

    [Route("api/[controller]")]
    public class WarningController: Controller
    {
        private IWarningService _warningService;
        public WarningController(IWarningService warningService)
        {
            _warningService = warningService;
            Warning warning = new Warning { WarningDate = DateTime.UtcNow.AddDays(2)};
            var warn = _warningService.GetWarningSetting();
            if( warn == null) _warningService.SetDefaultWarning(warning);
        }

        // GET: api/<controller>
        [HttpGet]
        public IActionResult Get()
        {
            var userName = this.User.Identity.Name;
            var warn = _warningService.GetWarningSetting();
            return Ok(warn);
        }

        // POST api/<controller>
        [HttpPost]
        public void Post([FromBody]Warning value)
        {
            _warningService.SetNewWarning(value);
        }

        // PUT api/<controller>/5
        [HttpPut("{id}")]
        public void Put([FromBody]Warning value)
        {
            _warningService.SetNewWarning(value);
        }

    }
}
