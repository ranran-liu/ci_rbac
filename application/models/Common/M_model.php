<?php

/**
 * Created by PhpStorm.
 * User: 98465
 * Date: 2018/10/12
 * Time: 10:44
 */

class M_model extends MY_Model{

    /**
     * 该Model对应的表名
     * @var string
     */
    var $table = '';

    /**
     * 该Model对应的主键名
     * @var string
     */
    var $primaryKey = 'id';

    public function __construct(){
        parent::__construct();
        $this->load->database('myproject',true);
    }

#region 通用操作
    /**
     * 执行sql @xwlyun
     * @param $sql
     * @param bool $affect_num 是否返回影响行数
     * @return mixed
     */
    function query($sql,$affect_num=false){
        $query = $this->db->query($sql);
        if($affect_num){
            $query = $this->db->affected_rows();
        }
        return $query;
    }

    /**
     * 返回多行数据 @xwlyun
     * @param $sql
     * @return mixed
     */
    function getRows($sql){
        $query = $this->db->query($sql);
        return $query->result_array();
    }

    /**
     * 返回单行数据 @xwlyun
     * @param $sql
     * @return mixed
     */
    function getRow($sql){
        $data = $this->getRows($sql);
        return $data[0];
    }

    /**
     * 返回单行首列数据 @xwlyun
     * @param $sql
     * @return mixed
     */
    function getOne($sql){
        $data = $this->getRow($sql);
        return current($data);
    }

    /**
     * 插入数据 @xwlyun
     * @param $data 插入的数据array
     * @param string $table 表名
     * @param bool $return 是否需要返回插入成功的id
     * @return bool
     */
    function insert($data, $table='', $return = false){
        if(!$table){
            if(!$this->table){
                return false;
            }
            $table = $this->table;
        }
        $query = $this->db->insert($table, $data);
        if($return){
            $query = $this->db->insert_id();
        }
        return $query;
    }

    /**
     * 删除数据 @xwlyun
     * @param $where where (e.g. array('field' =>'value',...))
     * @param string $table
     * @return bool
     */
    function delete($where, $table='',$limit=1){
        if(!$table){
            if(!$this->table){
                return false;
            }
            $table = $this->table;
        }
        $this->db->where($where);
        $this->db->limit($limit);
        $this->db->delete($table);
    }

    /**
     * 更新数据 @xwlyun
     * @param $where where (e.g. array('field' =>'value',...))
     * @param $update update (e.g. array('field' =>'value',...))
     * @param string $table
     * @param int $limit
     * @return bool
     */
    function update($where,$update,$table='',$limit=1){
        if(!$table){
            if(!$this->table){
                return false;
            }
            $table = $this->table;
        }
        $this->db->where($where);
        $this->db->limit($limit);
        $this->db->update($table, $update);
        return $this->db->affected_rows();
    }
#endregion

#region ci框架链式
    /**
     * where (e.g. array('field' =>'value',...)) @xwlyun
     * @param array $where
     * @return $this
     */
    function where($where=array()){
        foreach($where as $k=>$v){
            $this->db->where($k, $v);
        }
        return $this;
    }

    /**
     * limit $offset,$limit @xwlyun
     * @param int $limit
     * @param int $offset
     * @return $this
     */
    function limit($limit=1,$offset=0){
        $this->db->limit($limit,$offset);
        return $this;
    }

    /**
     * order by (e.g. array('field1'=>'asc',...)) @xwlyun
     * @param array $orderby
     * @return $this
     */
    function orderby($orderby=array()){
        if($orderby){
            foreach($orderby as $k=>$v){
                $this->db->order_by($k, $v);
            }
        }else{
            $this->db->order_by($this->primaryKey, 'asc');
        }
        return $this;
    }

    /**
     * where in (e.g. array('field1'=>array('value1','value2',...))) @xwlyun
     * @param array $wherein
     * @return $this
     */
    function wherein($wherein=array()){
        if($wherein){
            foreach($wherein as $k=>$v){
                $this->db->where_in($k, $v);
            }
        }
        return $this;
    }

    /**
     * where not in (e.g. array('field1'=>array('value1','value2',...))) @xwlyun
     * @param array $wherenotin
     * @return $this
     */
    function wherenotin($wherenotin=array()){
        if($wherenotin){
            foreach($wherenotin as $k=>$v){
                $this->db->where_not_in($k, $v);
            }
        }
        return $this;
    }

    /**
     * 获取总数 @xwlyun
     * @return mixed
     */
    function count(){
        $this->db->from($this->table);
        return $this->db->count_all_results();
    }

    /**
     * select (e.g. array('field1','field2',...) or 'filed1,filed2,...') @xwlyun
     * @param string $select
     * @return mixed
     */
    function select($select="*"){
        // select
        $this->db->select($select);
        // get
        $query = $this->db->get($this->table);
        // return
//		if($this->limit == 1){
//			$data = $query->row_array();
//		}else{
        $data = $query->result_array();
//		}
        return $data;
    }
#endregion

}