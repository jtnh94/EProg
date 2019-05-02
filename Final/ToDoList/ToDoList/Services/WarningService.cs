using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ToDoList.Models;

namespace ToDoList.Services
{
    public class WarningService: IWarningService
    {
        private ToDoContext _context;

        public WarningService(ToDoContext context)
        {
            _context = context;
        }

        public Warning GetWarningSetting()
        {
            return _context.Warnings.FirstOrDefault();
        }

        public void SetDefaultWarning(Warning warning)
        {
            _context.Warnings.Add(warning);
            _context.SaveChanges();
        }

        public void SetNewWarning(Warning warning)
        {
            Warning newWarning = new Warning { WarningDate = warning.WarningDate };
            _context.Warnings.Add(newWarning);

            var deletedWarning = GetWarningSetting();
            _context.Warnings.RemoveRange(_context.Warnings.Where(w => w.Id == deletedWarning.Id).FirstOrDefault());
            _context.SaveChanges();

        }

    }
}
