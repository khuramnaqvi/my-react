<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

use App\Models\User;
use App\Models\product;


class api_controller extends Controller
{
    public function register(Request $request)
    {
    $user =new User();
    $user->f_name = $request->input('f_name');
    $user->l_name = $request->input('l_name');
    $user->password = Hash::make($request->input('password'));
    $user->email =$request->input('email');
    $user->save();
    return $user;
    }
    public function login(Request $request)
    {
        if (User::where('email', $request->input('email'))->exists())
        {
            $user=User::where('email',$request->input('email'))->get();


            if (Hash::check($request->input('password'), $user[0]->password)) {
                $user_data=User::find($user[0]->id);
                return response()->json(['success'=>true, 'data' => $user_data]);
 
            }
            else{
                return response()->json(['success'=>false, 'message' => 'Invalid Password']); 
            }

        
        }
        else{
            return response()->json(['success'=>false, 'message' => 'Invalid Email Adress']); 
        }
    } 
    public function add_product(Request $request)
    {
       
        $user=new product();
        $user->name=$request->input('name');
        $user->dis = $request->input('dis');
        $user->price = $request->input('price');
        $user->file = $request->file;

        if($request->hasFile('file'))
        {
            $file = $request->file('file');
            $extension = $file->getClientOriginalExtension(); // getting image extension
            $filename = time().'.' . $extension;
            $file->move('product', $filename);

            $user->file = 'product/'.$filename;
        }

        $user->save();
         return($user);
    }
    
    public function get_product()
    {
       
        $data=product::all();
        return($data);
    }
    public function del_product($id)
    {
       
        $data=product::find($id);
        $data->delete();
        if($data)
        {
            return response()->json(['success'=>true, 'message' => 'Product Successfully Delete' ]);

        }
        else{
            return response()->json(['success'=>true, 'message' => 'Some thing went wrong' ]);

        }
        

    }
    public function edit_product($id)
    {
       
        $data=product::find($id);
        return($data);
    }
    public function update_product(Request $request ,$id)
    {
       
        $user=product::find($id);
        $user->name=$request->input('name');
        $user->dis = $request->input('dis');
        $user->price = $request->input('price');
        

        if($request->hasFile('file'))
        {
            $user->file = $request->file;
            $file = $request->file('file');
            $extension = $file->getClientOriginalExtension(); // getting image extension
            $filename = time().'.' . $extension;
            $file->move('product', $filename);

            $user->file = 'product/'.$filename;
        }

        $user->save();
        if($user)
        {
            return response()->json(['success'=>true, 'message' => 'Product Successfully Update' ]);

        }
    }
    
    
}
