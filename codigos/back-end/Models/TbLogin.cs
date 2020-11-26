﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Back_End.Models
{
    [Table("tb_login")]
    public partial class TbLogin
    {
        public TbLogin()
        {
            TbCliente = new HashSet<TbCliente>();
        }

        [Key]
        [Column("id_login")]
        public int IdLogin { get; set; }
        [Column("ds_email", TypeName = "varchar(100)")]
        public string DsEmail { get; set; }
        [Column("ds_senha", TypeName = "varchar(100)")]
        public string DsSenha { get; set; }

        [InverseProperty("IdLoginNavigation")]
        public virtual ICollection<TbCliente> TbCliente { get; set; }
    }
}
