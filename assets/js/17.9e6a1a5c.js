(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{317:function(_,v,t){_.exports=t.p+"assets/img/variables.51fa3e16.png"},436:function(_,v,t){"use strict";t.r(v);var e=t(44),d=Object(e.a)({},(function(){var _=this,v=_.$createElement,e=_._self._c||v;return e("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[e("h1",{attrs:{id:"审核选项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#审核选项"}},[_._v("#")]),_._v(" 审核选项")]),_._v(" "),e("p",[_._v("goInception的审核规则都可以通过"),e("code",[_._v("inception show variables;")]),_._v("查看")]),_._v(" "),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[_._v("inception "),e("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("show")]),_._v(" variables"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(";")]),_._v("\n")])])]),e("p",[_._v("并支持以下方式设置:")]),_._v(" "),e("ul",[e("li",[_._v("1.通过"),e("code",[_._v("inception set")]),_._v("设置")])]),_._v(" "),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[_._v("inception "),e("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("set")]),_._v(" check_dml_limit "),e("span",{pre:!0,attrs:{class:"token operator"}},[_._v("=")]),_._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[_._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(";")]),_._v("\n")])])]),e("ul",[e("li",[_._v("2.配置config.toml,并通过"),e("code",[_._v("-config=config.toml")]),_._v("指定配置文件启动")])]),_._v(" "),e("h2",{attrs:{id:"variables列表"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#variables列表"}},[_._v("#")]),_._v(" variables列表")]),_._v(" "),e("p",[e("img",{attrs:{src:t(317),alt:"variables列表"}})]),_._v(" "),e("table",[e("thead",[e("tr",[e("th",[_._v("参数")]),_._v(" "),e("th",[_._v("默认值")]),_._v(" "),e("th",[_._v("可选范围")]),_._v(" "),e("th",[_._v("说明")])])]),_._v(" "),e("tbody",[e("tr",[e("td",[_._v("check_autoincrement_datatype")]),_._v(" "),e("td",[_._v("false")]),_._v(" "),e("td",[_._v("true,false")]),_._v(" "),e("td",[_._v("当建表时自增列的类型不为int或者bigint时报错")])]),_._v(" "),e("tr",[e("td",[_._v("check_autoincrement_init_value")]),_._v(" "),e("td",[_._v("false")]),_._v(" "),e("td",[_._v("true,false")]),_._v(" "),e("td",[_._v("当建表时自增列的值指定的不为1，则报错")])]),_._v(" "),e("tr",[e("td",[_._v("check_autoincrement_name")]),_._v(" "),e("td",[_._v("false")]),_._v(" "),e("td",[_._v("true,false")]),_._v(" "),e("td",[_._v("建表时，如果指定的自增列的名字不为ID，则报错，说明是有意义的，给提示")])]),_._v(" "),e("tr",[e("td",[_._v("check_column_comment")]),_._v(" "),e("td",[_._v("false")]),_._v(" "),e("td",[_._v("true,false")]),_._v(" "),e("td",[_._v("建表时，列没有注释时报错")])]),_._v(" "),e("tr",[e("td",[_._v("check_column_default_value")]),_._v(" "),e("td",[_._v("false")]),_._v(" "),e("td",[_._v("true,false")]),_._v(" "),e("td",[_._v("检查在建表、修改列、新增列时，新的列属性是不是要有默认值")])]),_._v(" "),e("tr",[e("td",[_._v("check_column_position_change "),e("code",[_._v("v0.9")])]),_._v(" "),e("td",[_._v("false")]),_._v(" "),e("td",[_._v("true,false")]),_._v(" "),e("td",[_._v("检查列位置/顺序变更")])]),_._v(" "),e("tr",[e("td",[_._v("check_column_type_change "),e("code",[_._v("v0.7.3")])]),_._v(" "),e("td",[_._v("true")]),_._v(" "),e("td",[_._v("true,false")]),_._v(" "),e("td",[_._v("检查字段类型变更")])]),_._v(" "),e("tr",[e("td",[_._v("check_dml_limit")]),_._v(" "),e("td",[_._v("false")]),_._v(" "),e("td",[_._v("true,false")]),_._v(" "),e("td",[_._v("在DML语句中使用了LIMIT时，是不是要报错")])]),_._v(" "),e("tr",[e("td",[_._v("check_dml_orderby")]),_._v(" "),e("td",[_._v("false")]),_._v(" "),e("td",[_._v("true,false")]),_._v(" "),e("td",[_._v("在DML语句中使用了Order By时，是不是要报错")])]),_._v(" "),e("tr",[e("td",[_._v("check_dml_where")]),_._v(" "),e("td",[_._v("false")]),_._v(" "),e("td",[_._v("true,false")]),_._v(" "),e("td",[_._v("在DML语句中没有WHERE条件时，是不是要报错")])]),_._v(" "),e("tr",[e("td",[_._v("check_float_double "),e("code",[_._v("v1.0.2")])]),_._v(" "),e("td",[_._v("false")]),_._v(" "),e("td",[_._v("true,false")]),_._v(" "),e("td",[_._v("开启时,当使用 "),e("code",[_._v("float/double")]),_._v(" 类型时提示转成 "),e("code",[_._v("decimal")]),_._v(" 类型")])]),_._v(" "),e("tr",[e("td",[_._v("check_identifier")]),_._v(" "),e("td",[_._v("false")]),_._v(" "),e("td",[_._v("true,false")]),_._v(" "),e("td",[_._v("检查标识符是否正确,规则是[a-z,A-Z,0-9,_]")])]),_._v(" "),e("tr",[e("td",[_._v("check_identifier_lower  "),e("code",[_._v("v1.2.5")])]),_._v(" "),e("td",[_._v("false")]),_._v(" "),e("td",[_._v("true,false")]),_._v(" "),e("td",[_._v("要求标识符即表名、列名、索引名等必须为小写,默认为"),e("code",[_._v("false")])])]),_._v(" "),e("tr",[e("td",[_._v("check_identifier_upper  "),e("code",[_._v("v1.0.2")])]),_._v(" "),e("td",[_._v("false")]),_._v(" "),e("td",[_._v("true,false")]),_._v(" "),e("td",[_._v("要求标识符即表名、列名、索引名等必须为大写,默认为"),e("code",[_._v("false")])])]),_._v(" "),e("tr",[e("td",[_._v("check_implicit_type_conversion "),e("code",[_._v("v1.1.3")])]),_._v(" "),e("td",[_._v("false")]),_._v(" "),e("td",[_._v("true,false")]),_._v(" "),e("td",[_._v("检查where条件中是否存在隐式类型转换,默认值"),e("code",[_._v("false")])])]),_._v(" "),e("tr",[e("td",[_._v("check_index_prefix")]),_._v(" "),e("td",[_._v("false")]),_._v(" "),e("td",[_._v("true,false")]),_._v(" "),e("td",[_._v("是否检查索引前缀,索引前缀通过参数"),e("code",[_._v("index_prefix")]),_._v("和"),e("code",[_._v("uniq_index_prefix")]),_._v("配置")])]),_._v(" "),e("tr",[e("td",[_._v("check_insert_field")]),_._v(" "),e("td",[_._v("false")]),_._v(" "),e("td",[_._v("true,false")]),_._v(" "),e("td",[_._v("是不是要检查插入语句中的列链表的存在性")])]),_._v(" "),e("tr",[e("td",[_._v("check_primary_key")]),_._v(" "),e("td",[_._v("false")]),_._v(" "),e("td",[_._v("true,false")]),_._v(" "),e("td",[_._v("建表时，如果没有主键，则报错")])]),_._v(" "),e("tr",[e("td",[_._v("check_table_comment")]),_._v(" "),e("td",[_._v("false")]),_._v(" "),e("td",[_._v("true,false")]),_._v(" "),e("td",[_._v("建表时，表没有注释时报错")])]),_._v(" "),e("tr",[e("td",[_._v("check_timestamp_count "),e("code",[_._v("v0.6.0")])]),_._v(" "),e("td",[_._v("false")]),_._v(" "),e("td",[_._v("true,false")]),_._v(" "),e("td",[_._v("配置是否检查current_timestamp数量")])]),_._v(" "),e("tr",[e("td",[_._v("check_timestamp_default")]),_._v(" "),e("td",[_._v("false")]),_._v(" "),e("td",[_._v("true,false")]),_._v(" "),e("td",[_._v("建表时，如果没有为timestamp类型指定默认值，则报错")])]),_._v(" "),e("tr",[e("td",[_._v("columns_must_have_index "),e("code",[_._v("v1.2.2")])]),_._v(" "),e("td",[_._v('""')]),_._v(" "),e("td",[_._v("string")]),_._v(" "),e("td",[_._v("指定的列必须添加索引。多个列时以逗号分隔("),e("code",[_._v("格式: 列名 [列类型,可选]")]),_._v("),指定列类型时对类型也会限制.")])]),_._v(" "),e("tr",[e("td",[_._v("default_charset "),e("code",[_._v("v1.0.5")])]),_._v(" "),e("td",[_._v('"utf8mb4"')]),_._v(" "),e("td",[_._v("string")]),_._v(" "),e("td",[_._v("设置连接数据库的默认字符集,默认值为"),e("code",[_._v("utf8mb4")]),_._v(" (解决低版本不支持utf8mb4的问题)")])]),_._v(" "),e("tr",[e("td",[_._v("disable_types "),e("code",[_._v("v1.2.6")])]),_._v(" "),e("td",[_._v('""')]),_._v(" "),e("td",[_._v("string")]),_._v(" "),e("td",[_._v("禁用数据库类型,多个时以逗号分隔(合并参数 enable_blob_type,enable_json_type,enable_enum_set_bit,enable_timestamp_type)")])]),_._v(" "),e("tr",[e("td",[_._v("enable_autoincrement_unsigned")]),_._v(" "),e("td",[_._v("false")]),_._v(" "),e("td",[_._v("true,false")]),_._v(" "),e("td",[_._v("自增列是不是要为无符号型")])]),_._v(" "),e("tr",[e("td",[_._v("enable_any_statement "),e("code",[_._v("v1.2.5")])]),_._v(" "),e("td",[_._v("false")]),_._v(" "),e("td",[_._v("true,false")]),_._v(" "),e("td",[_._v("是否允许所有语法(仍受其他开关影响,如删表等)."),e("a",{attrs:{href:"https://github.com/hanchuanchuan/goInception/pull/301",target:"_blank",rel:"noopener noreferrer"}},[_._v("详细说明见PR"),e("OutboundLink")],1)])]),_._v(" "),e("tr",[e("td",[_._v("enable_blob_not_null "),e("code",[_._v("v1.0")])]),_._v(" "),e("td",[_._v("false")]),_._v(" "),e("td",[_._v("true,false")]),_._v(" "),e("td",[_._v("是否允许blob/text/json类型置为"),e("code",[_._v("not null")]),_._v(",默认为"),e("code",[_._v("false")]),_._v(",即不允许")])]),_._v(" "),e("tr",[e("td",[_._v("enable_blob_type  "),e("code",[_._v("已弃用")])]),_._v(" "),e("td",[_._v("false")]),_._v(" "),e("td",[_._v("true,false")]),_._v(" "),e("td",[_._v("检查是不是支持BLOB字段，包括建表、修改列、新增列操作 (使用参数"),e("code",[_._v("disable_types")]),_._v("代替)")])]),_._v(" "),e("tr",[e("td",[_._v("enable_change_column "),e("code",[_._v("v1.0.3")])]),_._v(" "),e("td",[_._v("true")]),_._v(" "),e("td",[_._v("true,false")]),_._v(" "),e("td",[_._v("设置是否支持change column语法,默认值"),e("code",[_._v("true")])])]),_._v(" "),e("tr",[e("td",[_._v("enable_column_charset")]),_._v(" "),e("td",[_._v("false")]),_._v(" "),e("td",[_._v("true,false")]),_._v(" "),e("td",[_._v("允许列自己设置字符集")])]),_._v(" "),e("tr",[e("td",[_._v("enable_drop_database")]),_._v(" "),e("td",[_._v("false")]),_._v(" "),e("td",[_._v("true,false")]),_._v(" "),e("td",[_._v("是否允许删除数据库")])]),_._v(" "),e("tr",[e("td",[_._v("enable_drop_table")]),_._v(" "),e("td",[_._v("false")]),_._v(" "),e("td",[_._v("true,false")]),_._v(" "),e("td",[_._v("是否允许删除表")])]),_._v(" "),e("tr",[e("td",[_._v("enable_enum_set_bit  "),e("code",[_._v("已弃用")])]),_._v(" "),e("td",[_._v("false")]),_._v(" "),e("td",[_._v("true,false")]),_._v(" "),e("td",[_._v("是不是支持enum,set,bit数据类型 (使用参数"),e("code",[_._v("disable_types")]),_._v("代替)")])]),_._v(" "),e("tr",[e("td",[_._v("enable_fingerprint "),e("code",[_._v("v0.6.2")])]),_._v(" "),e("td",[_._v("false")]),_._v(" "),e("td",[_._v("true,false")]),_._v(" "),e("td",[_._v("sql指纹功能。dml语句相似时，可以根据相同的指纹ID复用explain结果，以减少远端数据库explain操作，并提高审核速度")])]),_._v(" "),e("tr",[e("td",[_._v("explain_rule "),e("code",[_._v("v1.1.1")])]),_._v(" "),e("td",[_._v('"first"')]),_._v(" "),e("td",[_._v('"first", "max"')]),_._v(" "),e("td",[_._v("explain判断受影响行数时使用的规则("),e("code",[_._v('"first", "max"')]),_._v(")。  "),e("code",[_._v('"first"')]),_._v(": 使用第一行的explain结果作为受影响行数, "),e("code",[_._v('"max"')]),_._v(": \t\t使用explain结果中的最大值作为受影响行数")])]),_._v(" "),e("tr",[e("td",[_._v("enable_foreign_key")]),_._v(" "),e("td",[_._v("false")]),_._v(" "),e("td",[_._v("true,false")]),_._v(" "),e("td",[_._v("是不是支持外键")])]),_._v(" "),e("tr",[e("td",[_._v("enable_identifer_keyword")]),_._v(" "),e("td",[_._v("false")]),_._v(" "),e("td",[_._v("true,false")]),_._v(" "),e("td",[_._v("检查在SQL语句中，是不是有标识符被写成MySQL的关键字，默认值为报警。")])]),_._v(" "),e("tr",[e("td",[_._v("enable_json_type  "),e("code",[_._v("v0.7.2")]),_._v(" "),e("code",[_._v("已弃用")])]),_._v(" "),e("td",[_._v("false")]),_._v(" "),e("td",[_._v("true,false")]),_._v(" "),e("td",[_._v("设置是否允许json类型字段，包括建表、修改列、新增列操作 (使用参数"),e("code",[_._v("disable_types")]),_._v("代替)")])]),_._v(" "),e("tr",[e("td",[_._v("enable_minimal_rollback "),e("code",[_._v("v1.1.2")])]),_._v(" "),e("td",[_._v("false")]),_._v(" "),e("td",[_._v("true,false")]),_._v(" "),e("td",[_._v("设置是否启用最小化回滚SQL，当开启时，update的回滚语句仅记录最小化变更(未变更列不再记录), 默认为"),e("code",[_._v("false")])])]),_._v(" "),e("tr",[e("td",[e("s",[_._v("enable_not_innodb  "),e("code",[_._v("v1.0-rc4 已删除")])])]),_._v(" "),e("td",[_._v("false")]),_._v(" "),e("td",[_._v("true,false")]),_._v(" "),e("td",[e("code",[_._v("已删除!")]),_._v(" 请使用 "),e("code",[_._v("enable_set_engine")]),_._v("和 "),e("code",[_._v("support_engine")]),_._v("以便于更灵活的指定存储引擎。 "),e("s",[e("em",[_._v("建表指定的存储引擎不为Innodb，不报错")])])])]),_._v(" "),e("tr",[e("td",[_._v("enable_nullable")]),_._v(" "),e("td",[_._v("true")]),_._v(" "),e("td",[_._v("true,false")]),_._v(" "),e("td",[_._v("创建或者新增列时是否允许列为NULL")])]),_._v(" "),e("tr",[e("td",[_._v("enable_null_index_name "),e("code",[_._v("v0.7.1")])]),_._v(" "),e("td",[_._v("false")]),_._v(" "),e("td",[_._v("true,false")]),_._v(" "),e("td",[_._v("创建索引时是否允许空索引名")])]),_._v(" "),e("tr",[e("td",[_._v("enable_orderby_rand")]),_._v(" "),e("td",[_._v("false")]),_._v(" "),e("td",[_._v("true,false")]),_._v(" "),e("td",[_._v("order by rand时是不是报错")])]),_._v(" "),e("tr",[e("td",[_._v("enable_partition_table")]),_._v(" "),e("td",[_._v("false")]),_._v(" "),e("td",[_._v("true,false")]),_._v(" "),e("td",[_._v("是不是支持分区表")])]),_._v(" "),e("tr",[e("td",[_._v("enable_pk_columns_only_int")]),_._v(" "),e("td",[_._v("false")]),_._v(" "),e("td",[_._v("true,false")]),_._v(" "),e("td",[_._v("是否强制主键列必须是int")])]),_._v(" "),e("tr",[e("td",[_._v("enable_select_star")]),_._v(" "),e("td",[_._v("false")]),_._v(" "),e("td",[_._v("true,false")]),_._v(" "),e("td",[_._v("Select*时是不是要报错")])]),_._v(" "),e("tr",[e("td",[_._v("enable_set_charset")]),_._v(" "),e("td",[_._v("false")]),_._v(" "),e("td",[_._v("true,false")]),_._v(" "),e("td",[_._v("是否允许指定表和数据库的字符集")])]),_._v(" "),e("tr",[e("td",[_._v("enable_set_collation "),e("code",[_._v("v0.7")])]),_._v(" "),e("td",[_._v("false")]),_._v(" "),e("td",[_._v("true,false")]),_._v(" "),e("td",[_._v("是否允许指定表和数据库的排序规则")])]),_._v(" "),e("tr",[e("td",[_._v("enable_set_engine  "),e("code",[_._v("v1.0-rc4")])]),_._v(" "),e("td",[_._v("true")]),_._v(" "),e("td",[_._v("true,false")]),_._v(" "),e("td",[_._v("是否允许指定存储引擎,默认为"),e("code",[_._v("true")])])]),_._v(" "),e("tr",[e("td",[_._v("enable_sql_statistic "),e("code",[_._v("v0.9")])]),_._v(" "),e("td",[_._v("false")]),_._v(" "),e("td",[_._v("true,false")]),_._v(" "),e("td",[_._v("开启统计功能. 详见 "),e("strong",[e("RouterLink",{attrs:{to:"/zh/statistics.html"}},[_._v("统计功能")])],1)])]),_._v(" "),e("tr",[e("td",[_._v("enable_timestamp_type "),e("code",[_._v("v1.0.1")]),_._v(" "),e("code",[_._v("已弃用")])]),_._v(" "),e("td",[_._v("true")]),_._v(" "),e("td",[_._v("true,false")]),_._v(" "),e("td",[_._v("设置是否允许 "),e("code",[_._v("timestamp")]),_._v(" 类型字段，包括建表、修改列、新增列操作，默认为 "),e("code",[_._v("true")]),_._v(" (使用参数"),e("code",[_._v("disable_types")]),_._v("代替)")])]),_._v(" "),e("tr",[e("td",[_._v("enable_use_view "),e("code",[_._v("v1.2.4")])]),_._v(" "),e("td",[_._v("false")]),_._v(" "),e("td",[_._v("true,false")]),_._v(" "),e("td",[_._v("支持创建和使用视图")])]),_._v(" "),e("tr",[e("td",[_._v("enable_zero_date "),e("code",[_._v("v1.0.1")])]),_._v(" "),e("td",[_._v("true")]),_._v(" "),e("td",[_._v("true,false")]),_._v(" "),e("td",[_._v("设置是否支持时间为0值，关闭时强制报错。默认值为 "),e("code",[_._v("true")]),_._v("，即开启，此时会基于数据库sql_mode的NO_ZERO_DATE判断是否支持")])]),_._v(" "),e("tr",[e("td",[_._v("general_log "),e("code",[_._v("v0.8.1")])]),_._v(" "),e("td",[_._v("false")]),_._v(" "),e("td",[_._v("true,false")]),_._v(" "),e("td",[_._v("是否记录全量日志")])]),_._v(" "),e("tr",[e("td",[_._v("hex_blob "),e("code",[_._v("v1.1.4")])]),_._v(" "),e("td",[_._v("false")]),_._v(" "),e("td",[_._v("true,false")]),_._v(" "),e("td",[_._v("在解析binlog时,二进制类型如果无法以字符串形式保存,则以十六进制字符串转储(影响类型:binary,varbinary,blob),默认关闭")])]),_._v(" "),e("tr",[e("td",[_._v("ignore_osc_alter_stmt "),e("code",[_._v("v1.2.4")])]),_._v(" "),e("td",[_._v('""')]),_._v(" "),e("td",[_._v("string")]),_._v(" "),e("td",[_._v("配置要强制忽略osc的alter子句. 格式为drop index,add column等,多个时以逗号分隔")])]),_._v(" "),e("tr",[e("td",[_._v("lang "),e("code",[_._v("v0.5.1")])]),_._v(" "),e("td",[_._v("en-US")]),_._v(" "),e("td",[_._v("en-US,zh-CN")]),_._v(" "),e("td",[_._v("返回的信息使用语言,可选值"),e("code",[_._v("en-US")]),_._v(","),e("code",[_._v("zh-CN")])])]),_._v(" "),e("tr",[e("td",[_._v("lock_wait_timeout "),e("code",[_._v("v1.2.4")])]),_._v(" "),e("td",[_._v("-1")]),_._v(" "),e("td",[_._v("int")]),_._v(" "),e("td",[_._v("会话在执行SQL时的元数据锁等待超时,单位:秒")])]),_._v(" "),e("tr",[e("td",[_._v("max_allowed_packet    "),e("code",[_._v("v1.0-rc3")])]),_._v(" "),e("td",[_._v("4194304")]),_._v(" "),e("td",[_._v("int")]),_._v(" "),e("td",[_._v("允许的最大数据包大小.默认为 "),e("code",[_._v("4194304")]),_._v(",单位字节,即4MB")])]),_._v(" "),e("tr",[e("td",[_._v("max_char_length")]),_._v(" "),e("td",[_._v("0")]),_._v(" "),e("td",[_._v("int")]),_._v(" "),e("td",[_._v("最大char长度,当超出时警告转换为varchar类型")])]),_._v(" "),e("tr",[e("td",[_._v("max_ddl_affect_rows "),e("code",[_._v("v1.0.2")])]),_._v(" "),e("td",[_._v("0")]),_._v(" "),e("td",[_._v("int")]),_._v(" "),e("td",[_._v("当DDL预估受影响行数超出设置值时警告,为0时不限制")])]),_._v(" "),e("tr",[e("td",[_._v("max_execution_time "),e("code",[_._v("v1.2.5")])]),_._v(" "),e("td",[_._v("0")]),_._v(" "),e("td",[_._v("int")]),_._v(" "),e("td",[_._v("配置远端数据库的max_execution_time,为0时不限制")])]),_._v(" "),e("tr",[e("td",[_._v("max_insert_rows   "),e("code",[_._v("v0.6.3")])]),_._v(" "),e("td",[_._v("0")]),_._v(" "),e("td",[_._v("int")]),_._v(" "),e("td",[_._v("设置insert values允许的最大行数.0为不限制")])]),_._v(" "),e("tr",[e("td",[_._v("max_key_parts")]),_._v(" "),e("td",[_._v("3")]),_._v(" "),e("td",[_._v("int")]),_._v(" "),e("td",[_._v("一个索引最多可指定的列数")])]),_._v(" "),e("tr",[e("td",[_._v("max_keys")]),_._v(" "),e("td",[_._v("3")]),_._v(" "),e("td",[_._v("int")]),_._v(" "),e("td",[_._v("单表允许的最大索引数")])]),_._v(" "),e("tr",[e("td",[_._v("max_primary_key_parts")]),_._v(" "),e("td",[_._v("3")]),_._v(" "),e("td",[_._v("int")]),_._v(" "),e("td",[_._v("主键最多可指定的列数")])]),_._v(" "),e("tr",[e("td",[_._v("max_update_rows")]),_._v(" "),e("td",[_._v("5000")]),_._v(" "),e("td",[_._v("int")]),_._v(" "),e("td",[_._v("当update/delete预估受影响行数超出设置值时警告")])]),_._v(" "),e("tr",[e("td",[_._v("merge_alter_table")]),_._v(" "),e("td",[_._v("false")]),_._v(" "),e("td",[_._v("true,false")]),_._v(" "),e("td",[_._v("在多个改同一个表的语句出现是，报错，提示合成一个")])]),_._v(" "),e("tr",[e("td",[_._v("must_have_columns  "),e("code",[_._v("v0.6.3")])]),_._v(" "),e("td",[_._v('""')]),_._v(" "),e("td",[_._v("string")]),_._v(" "),e("td",[_._v("用以指定建表时必须创建的列。多个列时以逗号分隔("),e("code",[_._v("格式: 列名 [列类型,可选]")]),_._v(")")])]),_._v(" "),e("tr",[e("td",[_._v("skip_sqls "),e("code",[_._v("v1.0-rc3")])]),_._v(" "),e("td",[_._v('""')]),_._v(" "),e("td",[_._v("string")]),_._v(" "),e("td",[_._v("指定不再审核的SQL.该参数指定要跳过的客户端/框架默认SQL,以实现客户端兼容")])]),_._v(" "),e("tr",[e("td",[_._v("sql_mode "),e("code",[_._v("v1.2.4")])]),_._v(" "),e("td",[_._v('""')]),_._v(" "),e("td",[_._v("string")]),_._v(" "),e("td",[_._v("连接远程数据库的默认sql_mode设置")])]),_._v(" "),e("tr",[e("td",[_._v("sql_safe_updates")]),_._v(" "),e("td",[_._v("-1")]),_._v(" "),e("td",[_._v("-1,0,1")]),_._v(" "),e("td",[_._v("安全更新.-1表示不做操作,基于远端数据库,0表示关闭安全更新,1表示开启安全更新")])]),_._v(" "),e("tr",[e("td",[_._v("support_charset")]),_._v(" "),e("td",[_._v("utf8,utf8mb4")]),_._v(" "),e("td",[_._v("string")]),_._v(" "),e("td",[_._v("支持的字符集,多个时以逗号分隔")])]),_._v(" "),e("tr",[e("td",[_._v("support_collation "),e("code",[_._v("v0.7")])]),_._v(" "),e("td",[_._v('""')]),_._v(" "),e("td",[_._v("string")]),_._v(" "),e("td",[_._v("支持的排序规则,多个时以逗号分隔")])]),_._v(" "),e("tr",[e("td",[_._v("support_engine "),e("code",[_._v("v1.0-rc4")])]),_._v(" "),e("td",[_._v('"innodb"')]),_._v(" "),e("td",[_._v("string")]),_._v(" "),e("td",[_._v("支持的存储引擎类型.默认为"),e("code",[_._v("innodb")]),_._v(",此处可以设置多个,以逗号分隔,或者修改默认的存在引擎类型")])]),_._v(" "),e("tr",[e("td",[_._v("index_prefix "),e("code",[_._v("v1.2.0")])]),_._v(" "),e("td",[_._v('"idx_"')]),_._v(" "),e("td",[_._v("string")]),_._v(" "),e("td",[_._v("普通索引前缀，默认为 "),e("code",[_._v("idx_")]),_._v(", 受审核参数 "),e("code",[_._v("check_index_prefix")]),_._v(" 影响。为空时不限制")])]),_._v(" "),e("tr",[e("td",[_._v("uniq_index_prefix "),e("code",[_._v("v1.2.0")])]),_._v(" "),e("td",[_._v('"uniq_"')]),_._v(" "),e("td",[_._v("string")]),_._v(" "),e("td",[_._v("唯一索引前缀，默认为 "),e("code",[_._v("uniq_")]),_._v(", 受审核参数 "),e("code",[_._v("check_index_prefix")]),_._v(" 影响。为空时不限制")])]),_._v(" "),e("tr",[e("td",[_._v("table_prefix "),e("code",[_._v("v1.2.0")])]),_._v(" "),e("td",[_._v('""')]),_._v(" "),e("td",[_._v("string")]),_._v(" "),e("td",[_._v("表名前缀,默认为空,即不限制")])]),_._v(" "),e("tr",[e("td",[_._v("wait_timeout "),e("code",[_._v("v1.1.2")])]),_._v(" "),e("td",[_._v("0")]),_._v(" "),e("td",[_._v("int")]),_._v(" "),e("td",[_._v("远端数据库等待超时时间, 单位:秒, 默认值为 "),e("code",[_._v("0")]),_._v(" 时表示使用数据库默认值")])])])]),_._v(" "),e("h2",{attrs:{id:"示例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[_._v("#")]),_._v(" 示例")]),_._v(" "),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[_._v("/*--user=xxx;--password=xxx;--host=127.0.0.1;--port=3306;--check=1;*/")]),_._v("\ninception_magic_start"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(";")]),_._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("use")]),_._v(" test"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(";")]),_._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("drop")]),_._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("table")]),_._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("if")]),_._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("exists")]),_._v(" t1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(",")]),_._v("t2"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(";")]),_._v("\n\ninception "),e("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("set")]),_._v(" check_table_comment "),e("span",{pre:!0,attrs:{class:"token operator"}},[_._v("=")]),_._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[_._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(";")]),_._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("create")]),_._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("table")]),_._v(" t1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("(")]),_._v("id "),e("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("int")]),_._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("primary")]),_._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("key")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(";")]),_._v("\n\ninception "),e("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("set")]),_._v(" check_table_comment "),e("span",{pre:!0,attrs:{class:"token operator"}},[_._v("=")]),_._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[_._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(";")]),_._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("create")]),_._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("table")]),_._v(" t2"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("(")]),_._v("id "),e("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("int")]),_._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("primary")]),_._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("key")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(";")]),_._v("\n\ninception_magic_commit"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(";")]),_._v("\n")])])]),e("p",[_._v("审核结果(隐藏了部分列)：\n注意，"),e("code",[_._v("inception set")]),_._v(" 的行并不返回！除非set失败报错。")]),_._v(" "),e("table",[e("thead",[e("tr",[e("th",[_._v("order_id")]),_._v(" "),e("th",[_._v("stage")]),_._v(" "),e("th",[_._v("error_level")]),_._v(" "),e("th",[_._v("stage_status")]),_._v(" "),e("th",[_._v("error_message")]),_._v(" "),e("th",[_._v("sql")])])]),_._v(" "),e("tbody",[e("tr",[e("td",[_._v("1")]),_._v(" "),e("td",[_._v("CHECKED")]),_._v(" "),e("td",[_._v("0")]),_._v(" "),e("td",[_._v("Audit Completed")]),_._v(" "),e("td",[_._v("None")]),_._v(" "),e("td",[_._v("use test_inc")])]),_._v(" "),e("tr",[e("td",[_._v("2")]),_._v(" "),e("td",[_._v("CHECKED")]),_._v(" "),e("td",[_._v("0")]),_._v(" "),e("td",[_._v("Audit Completed")]),_._v(" "),e("td",[_._v("None")]),_._v(" "),e("td",[_._v("drop table if exists t1,t2")])]),_._v(" "),e("tr",[e("td",[_._v("3")]),_._v(" "),e("td",[_._v("CHECKED")]),_._v(" "),e("td",[_._v("1")]),_._v(" "),e("td",[_._v("Audit Completed")]),_._v(" "),e("td",[_._v("表 't1' 需要设置注释.")]),_._v(" "),e("td",[_._v("create table t1(id int primary key)values(1,1,1)")])]),_._v(" "),e("tr",[e("td",[_._v("4")]),_._v(" "),e("td",[_._v("CHECKED")]),_._v(" "),e("td",[_._v("0")]),_._v(" "),e("td",[_._v("Audit Completed")]),_._v(" "),e("td",[_._v("None")]),_._v(" "),e("td",[_._v("create table t2(id int primary key)")])])])]),_._v(" "),e("h2",{attrs:{id:"重要说明-v1-2-2更新"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#重要说明-v1-2-2更新"}},[_._v("#")]),_._v(" 重要说明(V1.2.2更新)")]),_._v(" "),e("p",[_._v("从"),e("code",[_._v("V1.2.2")]),_._v("版本开始，支持在SQL语句内部动态设置审核选项，实现会话级变量设置.\n("),e("a",{attrs:{href:"https://github.com/hanchuanchuan/goInception/issues/166",target:"_blank",rel:"noopener noreferrer"}},[_._v("相关issue"),e("OutboundLink")],1),_._v(")")])])}),[],!1,null,null,null);v.default=d.exports}}]);