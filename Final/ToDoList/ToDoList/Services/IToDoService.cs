using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ToDoList.Models;

namespace ToDoList.Services
{
    public interface IToDoService
    {
        void CreateToDo(string userName, ToDo item);
        IEnumerable<ToDo> SelectAll(string userName);
        ToDo SelectToDo(int id);
        void DeleteToDo(string userName, int id);
        void UpdateToDo(string userName, int id, ToDo todo);
        IEnumerable<ToDo> SelectAllWithTags(string[] tagList);
    }
}
