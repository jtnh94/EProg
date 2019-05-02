using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ToDoList.Models;

namespace ToDoList.Services
{
    public class ToDoService : IToDoService
    {
        
        private ToDoContext _context;

        public ToDoService(ToDoContext context)
        {
            _context = context;
        }

        public void CreateToDo(string userName, ToDo item)
        {
            item.UserName = userName;
            _context.ToDos.Add(item);
            _context.ToDoTags.AddRange(item.ToDoTag);
            _context.SaveChanges();
        }

        public IEnumerable<ToDo> SelectAll(string userName)
        {
            return _context.ToDos.Where(u => u.UserName == userName).ToList();
        }

        public ToDo SelectToDo(int id)
        {
            return _context.ToDos.Where(todo => todo.Id == id).FirstOrDefault();
        }

        public void DeleteToDo(string userName, int id)
        {
            var toDoDeleted = SelectToDo(id);
            if (toDoDeleted != null)
            {
                if(toDoDeleted.UserName != userName)
                {
                    throw new Exception();
                }
                _context.ToDos.Remove(toDoDeleted);
                _context.SaveChanges();
            }
            
        }

        public void UpdateToDo(string userName, int id, ToDo todo)
        {
            var toDoUpdated = SelectToDo(id);
            if(todo.UserName != userName)
            {
                throw new Exception();
            }
            toDoUpdated.Name = todo.Name;
            toDoUpdated.DueDate = todo.DueDate;
            toDoUpdated.ToDoTag = todo.ToDoTag;
            toDoUpdated.Status = todo.Status;
            _context.SaveChanges();
        }

        public IEnumerable<ToDo> SelectAllWithTags(string[] tagList)
        {
            var toDos = _context.ToDos.Where(todo => tagList.All(tag => todo.ToDoTag.Any(todoTag => todoTag.Tag == tag)));
            return toDos;
        }
    }
}
