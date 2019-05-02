using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ToDoList.Models
{
    public class ToDoTag
    {
        public int Id { get; set; }
        public string Tag { get; set; }
        public int ToDoId { get; set; }
    }
}
