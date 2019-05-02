using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ToDoList.Models
{
    public class ToDoContext : IdentityDbContext<ToDoUser>
    {
        public ToDoContext(DbContextOptions<ToDoContext> options) : base(options)
        {
            Database.EnsureCreated();
        }

        public DbSet<ToDo> ToDos { get; set; }
        public DbSet<ToDoTag> ToDoTags { get; set; }
        public DbSet<Warning> Warnings { get; set; }
    }
}
