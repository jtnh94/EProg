using System;
using System.Collections.Generic;

namespace ToDoList.Models
{
    public class ToDo
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime DueDate { get; set; }
        public List<ToDoTag> ToDoTag { get; set; }
        public Boolean Status { get; set; }
        public string UserName { get; set; }
    }
}