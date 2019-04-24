using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ToDoList.Models;

namespace ToDoList.Services
{
    public interface IToDoService
    {
        void CreateToDo(ToDo item);
        IEnumerable<ToDo> SelectAll();
        ToDo SelectToDo(int id);
        void DeleteToDo(int id);
        void UpdateToDo(int id, ToDo todo);
        IEnumerable<ToDo> SelectAllWithTags(string[] tagList);
    }
}
