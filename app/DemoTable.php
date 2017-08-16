<?php

namespace App;

class DemoTable
{
    public $headers;
    public $data;
//    protected $frontend_headerAlias = [ 'FName'=>'First Name',
//                                        'LName'=>'Last Name',
//                                        'Age'=>'Age'];

    public function __construct(JsonFile $jsonFile){
        $this->data = $jsonFile->data;
        $jsonProps = [];
        foreach($jsonFile->data as $obj){
            $jsonProps = array_merge($jsonProps, array_keys ((array)$obj));
        }
        foreach(array_unique($jsonProps) as $accessor){
            $this->headers[] = (object)['accessor'=>$accessor, 'Header'=>$accessor];
        }
//        foreach($this->headers as $headerObj){
//            $headerObj->Header = $this->frontend_headerAlias[$headerObj->accessor];
//        }
    }


}
