using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ToDoList.Models;

namespace ToDoList.Services
{
    public interface IWarningService
    {
        Warning GetWarningSetting();
        void SetDefaultWarning(Warning Warning);
        void SetNewWarning(Warning warning);
    }
}
