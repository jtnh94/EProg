using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using ToDoList.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ToDoList.Controllers
{
    [Route("api/[controller]")]
    public class LoginController : Controller
    {
        private UserManager<ToDoUser> _userManager;
        private SignInManager<ToDoUser> _signInManager;
        public LoginController(SignInManager<ToDoUser> signinManager, UserManager<ToDoUser> userManager)
        {
            this._userManager = userManager;
            this._signInManager = signinManager;
        }

        // POST api/<controller>
        [HttpPost("create")]
        public async Task<IActionResult> CreateUserAsync([FromBody]ToDoUserLogin loginCredentials)
        {
           var result = await _userManager.CreateAsync(new ToDoUser()
            {
                UserName = loginCredentials.userName
            }, loginCredentials.password);

            if (result.Succeeded)
            {
                
                return Ok();
            }
            else
            {
                
                return BadRequest();
            }
        }

        
        [HttpPost()]
        public async Task<IActionResult> AuthenticateUserAsync([FromBody]ToDoUserLogin loginCredentials)
        {
            var result = await _signInManager.PasswordSignInAsync(loginCredentials.userName, loginCredentials.password, true, false);
            {
                if (result.Succeeded)
                {

                    return LocalRedirect("/");
                }
                else
                {
                    return Unauthorized();
                }
            }
        }
    }
}
